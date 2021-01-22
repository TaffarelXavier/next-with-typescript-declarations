import { NextPage } from 'next'

const FormExample: NextPage<API.InfoRequest> = ({ id }) => {

    const onSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };
        const email = target.email.value; // typechecks!
        const password = target.password.value; // typechecks!
        console.log(email, password)
    }

    return (<>
        <form
            onSubmit={onSubmit}
        >
            <div>
                <label>
                    Email:
      <input type="email" name="email" />
                </label>
            </div>
            <div>
                <label>
                    Password:
      <input type="password" name="password" />
                </label>
            </div>
            <div>
                <input type="submit" value="Log in" />
            </div>
        </form>
    </>)
}

export default FormExample