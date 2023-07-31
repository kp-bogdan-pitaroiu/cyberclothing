const fs = require('fs');


const readDataFromFile = () => {
  try {
    const data = fs.readFileSync('products.json', 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data from file:', error);
    return null;
  }
};

const updateDataInFile = (newData) => {
  try {
    const data = JSON.stringify(newData, null, 2);
    fs.writeFileSync('products.json', data, 'utf-8');
    console.log('Data updated successfully.');
  } catch (error) {
    console.error('Error updating data in file:', error);
  }
};

const dataFromFile = readDataFromFile();
if (dataFromFile) {
  
  console.log('Data read from file:');
  console.log(dataFromFile);

  dataFromFile.products[0].price = 100; 
  dataFromFile.products.push({
    id: 21,
    name: "New Product",
    price: "50",
    status: "green",
    category: "New Category",
    description: "This is a new product",
    photo: "https://example.com/new-product.jpg",
    vendorId: "6",
  }); 

  updateDataInFile(dataFromFile);
}
