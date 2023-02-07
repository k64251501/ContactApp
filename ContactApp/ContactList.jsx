import React, { Component } from 'react'

 class ContactList extends Component {
  render() {
    return (
      <div>
        <h1>ContactList Page</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <table className='table table-hover'>
                <thead className='bg-dark text-white'><tr>
                  <th>id</th>
                  <th>name</th>
                  <th>email</th>
                  <th>city</th>
                </tr>

                </thead>
                <tbody className='bg-primary text-white'> 
                   {
                    this.props.contacts.map((contact) => {
                      return <tr key={contact}>
                      <td>{contact.id}</td>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.address.city}</td>
                    </tr>
                    })
                    
                   }
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactList