import Naveber from "@/components/Naveber";


const sindelayout = ({children}) => {
    return (
        <div>
            <Naveber></Naveber>
            {children}
        </div>
    );
};

export default sindelayout;