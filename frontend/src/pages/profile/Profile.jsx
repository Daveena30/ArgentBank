import './profile.css'
import Account from '../../components/account/account'
import accountData from '../../data/account.json'



const Profile = () => {
    const Tony = 'Tony Stark';
    const Jarvis = 'Jarvis AI';


    return (
        <main className='profile bg-dark'>
            <header>
                <h1>Welcome Back<br />{Tony} {Jarvis}</h1>
                <button>Edit Name</button>
            </header>

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
