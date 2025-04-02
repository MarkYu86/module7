import App from '../app/page';

export default function Login() {
  return (
    <>
    <div>
      <App/>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password"/>
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
}