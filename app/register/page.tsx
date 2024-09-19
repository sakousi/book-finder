"use client";



import RegisterForm from "@/app/register/components/regist";

const Register: React.FC = () => {
    return (

        <main className="min-h-screen flex items-center justify-center">

            <div className={" flex flex-col gap-6"}>
                <div className={"pr-6"}>
                    <h1 className="text-gray-800 text-4xl  font-semibold">
                        Créer un compte
                    </h1>
                    <p className={" text-xl "}>Merci d’entrer vos identifiants </p>
                </div>

                <div className={" shadow-lg rounded-lg bg-gray-200 p-6"}>
                    <RegisterForm />
                </div>
            </div>

        </main>

    );
};

export default Register;
