import ISideHome from "@/interfaces/ISideHome";
import Link from "next/link";

const SideHome = (props: ISideHome) => {
    return (
        <aside className="flex flex-col px-32 items-center w-1/3 h-full">
            <div className="">
                <h2 className="flex  text-4xl">{props.title}</h2>
                <p>{props.paragraph} <strong>{props.strong}</strong></p>
            </div>
            <Link href={props.path}>
                {props.buttonMsg}
            </Link>
        </aside>
    );
}

export default SideHome;