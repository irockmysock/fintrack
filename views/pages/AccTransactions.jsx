var React = require("react");
const Layout = require('./LayoutCom.jsx');

class AccountTxns extends React.Component {
  render() {

    let accTxns;

    if (this.props.transactions.rows === null) {
        accTxns = (<p class="text-danger">No Transactions To Display</p>);
    } else {

        accTxns = (
            <tbody>
            {this.props.transactions.rows.map(transaction =>
                <tr>
                    <td>{String(transaction.transaction_date).slice(8,10)} {String(transaction.transaction_date).slice(4,7)} {String(transaction.transaction_date).slice(11,15)}</td>
                    <td>${transaction.amount}</td>
                    <td><img className="cat-icon" src={transaction.cat_icon}/></td>
                    <td>{transaction.cat_name}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.details}</td>
                    <td><a href={transaction.receipt_url}><img className="cat-icon" src="/assets/receipt.png"/></a></td>
                    <td><a href={"/home/"+transaction.username+"/"+transaction.txnid+"/editTransaction"} class="btn btn-secondary btn-sm btn-success">EDIT </a></td>
                    <td><form method="POST" action={"/home/"+transaction.username+"/"+transaction.txnid+'/?_method=DELETE'}>
                            <button type="submit" class="btn btn-primary btn-sm btn-danger">DELETE</button>
                        </form></td>
                </tr>
            )}
            </tbody>);
    }

    return (

        <html lang="en">
          <head>

            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/slate/bootstrap.min.css"/>

            <link rel="stylesheet" type="text/css" href="/layout.css"/>

            <title>My FinTrack</title>
          </head>

          <body>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="/">
              <img src="/assets/logo.png" className="logo"/>FinTrack</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
                  <a class="nav-item nav-link" href={"/home/" + this.props.username[0] + "/accounts"}>Accounts</a>
                  <a class="nav-item nav-link" href={"/home/" + this.props.username[0] + "/allTransactions"}>Transactions</a>
                  <a class="nav-item nav-link disabled" href="#">Budgets</a>
                  <a class="nav-item nav-link" href="/logout">Logout</a>
                </div>
              </div>
            </nav>


            <div class="container-fluid">

                <div className="row">
                    <div className="col-12">
                      <blockquote class="blockquote text-center">
                          <h1>{this.props.date}</h1>
                      </blockquote>

                      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h2>Your Accounts</h2>
                        <div class="btn-toolbar mb-2 mb-md-0">
                            <div class="btn-group mr-2">
                                <a href={"/"} class="btn btn-primary">Dashboard</a>
                                <a href={"/home/" + this.props.username[0] + "/allTransactions"} class="btn btn-primary">All Transactions</a>
                                <a href={"/home/" + this.props.username[0] + "/accounts"} class="btn btn-primary">All Accounts</a>
                            </div>
                            <div>
                                <a href={"/home/" + this.props.username[0] + "/newAccount"} class="btn  btn-secondary btn-info">Add New Account</a>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className='col-4'>
                        <div class="card mb-3">
                          <h3 class="card-header">{this.props.transactions.rows[0].type}</h3>
                          <img className="card-img" src={this.props.transactions.rows[0].type_icon}/>

                          <div class="card-body">
                            <p class="card-text">Billing Date: {this.props.transactions.rows[0].billing_date}</p>
                          </div>

                        </div>
                    </div>
                </div>

                <h2>Transactions for {this.props.transactions.rows[0].type}</h2>
                  <div class="table-responsive">
                    <table className="table table-striped table-sm table-primary table-hover">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Amount</th>
                          <th colSpan="2">Category</th>
                          <th>Account</th>
                          <th>Details</th>
                          <th>Receipt</th>
                          <th class="text-center" colSpan="2">Actions</th>
                        </tr>
                      </thead>

                      {accTxns}


                    </table>
                  </div>
                </div>




        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
          </body>
        </html>




    );
  }
}

module.exports = AccountTxns;