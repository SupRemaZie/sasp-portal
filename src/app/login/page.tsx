import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Login() {
    return (
        <div>
            <LoginLink className="btn">Sign in</LoginLink>

            <RegisterLink className="btn">Sign up</RegisterLink>
        </div>
    );
}