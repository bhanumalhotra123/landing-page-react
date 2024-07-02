import { Button } from "./Button";

export const Navbar = () => {
    return (
        <div className="border-b">
            <div className="flex justify-between max-w-screen-xl mx-auto">
                <div className="text-2xl font-bold flex flex-col justify-center">
                    Garden 
                </div>
                <div>
                    <Button onClick={() => {
                        window.location.href = "https://www.catalog.fi/";
                    }}> Swap </Button>
                    <Button onClick={() => {
                        window.location.href = "https://www.catalog.fi/wallet";
                    }}> Wallet </Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
