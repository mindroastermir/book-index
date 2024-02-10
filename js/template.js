import data from './data.json' assert {type: 'json'};
console.log('data: ', data);        



class MyHeader extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>links</title>
            <!-- Font Awesome -->
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />
            <!-- Google Fonts -->
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
            <!-- MDB -->
            <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css" rel="stylesheet" />
            <style>
                .rtl{
                    direction: rtl;
                }
            </style>
        </head>
        <body>`;
    }
}

class MyNavigation extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-warning navbar-light ">
        <!-- Container wrapper -->
        <div class="container-fluid">

            <!-- Navbar brand -->
            <a class="navbar-brand" href="#">Books</a>

            <!-- Toggle button -->
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

            <!-- Collapsible wrapper -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <!-- Link -->
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>

                    <!-- Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
                        <!-- Dropdown menu -->
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item" href="#">Action</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Another action</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                    </li>

                </ul>

                <!-- Icons -->
                <ul class="navbar-nav d-flex flex-row me-1">
                    <li class="nav-item me-3 me-lg-0">
                        <a class="nav-link" href="#"><i class="fas fa-shopping-cart"></i></a>
                    </li>
                    <li class="nav-item me-3 me-lg-0">
                        <a class="nav-link" href="#"><i class="fab fa-twitter"></i></a>
                    </li>
                </ul>

                <!-- Search -->
                <form class="w-auto">
                    <input type="search" class="form-control" placeholder="Type query" aria-label="Search">
                </form>

            </div>
        </div>
        <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
        `;
    }
}

class MyFooter extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <script type=" text/javascript " src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.js "></script>
        </body>
        </html>`;
    }
}

class Rows extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        /*
        let rows = data.map(row => {
            "<li>row.id</li>";
        });
        */
        
        this.innerHTML = `
        
        `;
        
        this.innerHTML = `
        <table class='table w-100 rtl'>
            <tr>
                <th>#</th>
                <th>Book #</th>
                <th>Book Name</th>
                <th>Author</th>
                <th>Introduction</th>
                <th>Publisher</th>
                <th>Img</th>
            </tr>
            <tr>
                <td>${data[0].id}</td>
                <td><a target='_blank' href='index/${data[0].bookNo}.html'>${data[0].bookNo}</a></td>
                <td><a target='_blank' href='${data[0].link}'>${data[0].name}</a></td>
                <td>${data[0].author}</td>
                <td>${data[0].introduction.substring(0,10)}</td>
                <td>${data[0].publisher}</td>
                <td><img src='${data[0].thumbUrl}' /></td>
            </tr>
        </table>
        `;
        
    }
}

customElements.define('my-navigation', MyNavigation);
customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
customElements.define('my-rows', Rows);