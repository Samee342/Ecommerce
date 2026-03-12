import config from "../config";

function AuthLayout({ children }) {
  return (
    <section className="flex py-20 md:items-center justify-center min-h-screen bg-slate-100 ">
      <div className="container mx-auto  px-4">
        <div className="flex justify-center items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center w-fit bg-white rounded-2xl shadow-md lg:max-w-2/3 xl:max-w-1/2">
            <div className="hidden md:block bg-gradient-to-b from-primary via-purple-800 to-secondary h-full rounded-l-2xl py-10 justify flex-col">
              <div className="text-center px-8">
                <h1 className="text-white text-4xl font-semibold mb-5 my-20">
                  {config.appName}
                </h1>
                <p className="text-gray-200">
                  {`Welcome to ShopNest! We're so happy to have you. Get 10% off your first order with code WELCOME10.`}
                </p>
              </div>
            </div>

            <div>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AuthLayout;
