const generateManager = function(manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-success text-white">
                <h3>${manager.getName()}</h3>
                <h4>${manager.getRole()}</h4>
            </div>
            
            <div class="card-body bg-light">
                <p class="id">ID: ${manager.getId()}</p>
                <p class"email">Email Address: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>`;
        
};

const generateEngineer = function(engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-success text-white">
                <h3>${engineer.getName()}</h3>
                <h4>${engineer.getRole()}</h4>
            </div>
            
            <div class="card-body bg-light">
                <p class="id">ID: ${engineer.getId()}</p>
                <p class"email">Email Address: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                <p class="github">GitHub: <a href = "https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></p>
            </div>
        </div>
    </div>`;
};

const generateIntern = function(intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-success text-white">
                <h3>${intern.getName()}</h3>
                <h4>${intern.getRole()}</h4>
            </div>
            
            <div class="card-body bg-light">
                <p class="id">ID: ${intern.getId()}</p>
                <p class"email">Email Address: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                <p class="school">School: ${intern.getSchool()}</p>
            </div>
        </div>
    </div>`;
};

generatePage = (data) => {
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

    const generate = genTeamPage(teamCards);
    return generate;
}

const genTeamPage = function(teamCards) {
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
            <h1>My Team</h1>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center">
                ${teamCards}
                </div>
            </div>
        </main>
            
    
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </html>`;
};

module.exports = generatePage;

