const pug = require("pug");
const fs = require("fs/promises");

async function generateHtml() {
    try {
        const rawData = await fs.readFile('./customers/data.json');
        const users = JSON.parse(rawData);
        const html = pug.renderFile('./layout/layout.pug', { users });

        
        await fs.writeFile('index.html', html);

        console.log('HTML file generated successfully.');
    } catch (error) {
        console.error('Error generating HTML:', error);
    }
}

generateHtml();

// Line to update the customers.json file

// pug ./layout/includes/grid.pug -O "{ \"users\": $(< ./customers/data.json) }" -o ./output