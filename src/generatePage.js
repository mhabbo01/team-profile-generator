const generateManager = function(manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            
            <div class="card-body">
                <p> class="id">ID: ${manager.id}</p>
                <p> class"email">Email Address: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p> class="officeNumber">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>`;
        
};

const generateEngineer = function(engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Manager</h4>
            </div>
            
            <div class="card-body">
                <p> class="id">ID: ${engineer.id}</p>
                <p> class"email">Email Address: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p> class="github">GitHub: <a href = "https://github.com/${manager.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>`;
};

const generateIntern = function(intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Manager</h4>
            </div>
            
            <div class="card-body">
                <p> class="id">ID: ${intern.id}</p>
                <p> class"email">Email Address: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p> class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>`;
};

generateCards = (data) => {
    pageArr = [];

    for (let i=0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArr.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArr.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArr.push(internCard);
        }
    }

    const teamCards = pageArr.join('')

    const generate = generatePage(teamCards);
    return generate;
}

const generatePage = function(teamCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile Page</title>
    </head>
    <body>
        <header class="p-3 mb-2 bg-dark text-white text-center">
            <h1> "My Team" </h1>
        </header>
        <main>
            <div class="container>
                <div class="row justify-content-center">
                ${teamCards}
                </div>
            </div>
        </main>
            
    
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </html>`
}