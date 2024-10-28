import './profile.css'
import Account from '../../components/account/account'
import accountData from '../../data/account.json'
import { useSelector } from 'react-redux';


const Profile = () => {
    const user = useSelector((state) => state.auth.user);


    return (
        <main className='profile bg-dark'>
            <header>
                <h1>Welcome Back<br />{user.firstName} {user.lastName}</h1>
                <button>Edit Name</button>
            </header>

            <form>
          <p>Edit user name</p>

          <label htmlFor="userName">User name :</label>
          <input
            type="text"
            id="userName"
            defaultValue={user.userName}
            required
          />
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            defaultValue={user.firstName}
            disabled
          />
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            defaultValue={user.lastName}
            disabled
          />
          <section className='profil-buttons'>
            <button type="submit">Save</button>
            <button type="button" >Cancel</button>
          </section>


          </form>

            {accountData.map((account, index) => (
                <Account
                    key={index}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </main>
    )

};

export default Profile;
