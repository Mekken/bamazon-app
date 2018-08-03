require("dotenv").config();

let mysql = require("mysql");
let inquirer = require("inquirer");
let menuItems = ["Display Products","Purchase","Quit"];

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    //NOTE - TA: You can just add password here or create an .env file with SQL_Password Variable 
    password: process.env.SQL_Password,
    database: "bamazon"
});

connection.connect(function(err) {
    displayAllProducts();
});

function displayAllProducts(){
    connection.query("SELECT * FROM products", function(err, res, fields) {
        if (err) 
            throw err;
        
        console.log(" ID  | Product Name                        | Dapartment Name      | Price       | Quantity   |");
        res.forEach(function(prod,idx) {
            console.log(` %s| %s| %s| $ %s| %s|`,
            String(prod.item_id).padEnd(4),
            String(prod.product_name).padEnd(36),
            String(prod.department_name).padEnd(21),
            String(prod.price).padEnd(10),
            String(prod.stock_quantity).padEnd(11));
        });
        console.log("\n\n");
        displayMainMenu();
   });
}

function displayMainMenu() 
{
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to Do?",
            choices: menuItems,
            name: "choice"
        }
    ])
    .then(function(ans) {
        switch(ans.choice)
        {
            case "Display Products":
                displayAllProducts();
                break;
            case "Purchase":
                displayPurchaseMenu();
                break;
            default:
                console.log("Thank You for using Bamazon, Good-Bye!");
                connection.end();
                break;
        }
    })
}

function displayPurchaseMenu() {
    inquirer.prompt([
        {
            message: "Select an ID: ",
            type: "input",
            name: "id",
            validate: (name) => {
                return name !== '';
            }
        },
        {
            message: "How many will you Purchase?",
            type: "input",
            name: "units",
            validate: (name) => {
                return name !== '';
            }
        }
    ])
    .then(function(ans) {
        purchaseProduct(ans.id,ans.units);
    });
}

function purchaseProduct(id,units){
    connection.query("SELECT * FROM products WHERE item_id=?",[id],function(err,res,fields) {
        if (err)
            throw err;

        if (units <= 0 || units > res[0].stock_quantity) {
            console.log("Insufficient quantity!\n");
            displayMainMenu();
        } else {
            updateProdQuantity(id,res[0].stock_quantity-units);
            console.log("\n%d unit(s) of %s Purchased!",units,res[0].product_name);
            console.log("Total: $%d\n\n",(res[0].price*units));
            displayMainMenu();
        }
    })
}

function updateProdQuantity(id,new_stock){
    //console.log("Units: " + new_stock);
    if(new_stock > 0)
        connection.query("UPDATE products SET stock_quantity=? where item_id=?",[new_stock,id]);
    else
        connection.query("DELETE FROM products WHERE item_id=?",[id]);
}