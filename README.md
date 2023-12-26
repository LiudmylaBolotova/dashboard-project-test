# dashboard-project-test


The page was designed for a test task using Figma, Pug, JavaScript, CSS;

To update the customers.json file with a list of customers after entering data, enter into the terminal: 
pug ./layout/includes/grid.pug -O "{ \"users\": $(< ./customers/data.json) }" - o ./output