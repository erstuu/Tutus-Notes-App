import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.jsx";
import BookOpenIcon from "@/components/icons/BookOpenIcon.jsx";
import PlaneIcon from "@/components/icons/PlaneIcon.jsx";
import FolderIcon from "@/components/icons/FolderIcon.jsx";
import StarIcon from "@/components/icons/StarIcon.jsx";
import TrashIcon from "@/components/icons/TrashIcon.jsx";

const Sidebar = () => {
    return (
        <div className="hidden lg:block border-r bg-gray-100/40 dark:bg-gray-800/40">
            <div className="flex h-full flex-col gap-2">
                <div className="flex h-16 items-center border-b px-6">
                    <Link to={""} className="flex items-center gap-2 font-semibold" href="#">
                        <BookOpenIcon className="h-6 w-6"/>
                        <span>TuTu's Notes</span>
                    </Link>
                    <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                        <PlaneIcon className="h-4 w-4"/>
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        <Link to={""}
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                              href="#"
                        >
                            <FolderIcon className="h-4 w-4"/>
                            All Notes
                        </Link>
                        <Link to={""}
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                              href="#"
                        >
                            <StarIcon className="h-4 w-4"/>
                            Favourites
                        </Link>
                        <Link to={""}
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                              href="#"
                        >
                            <TrashIcon className="h-4 w-4"/>
                            Trash
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center justify-center h-20 mt-72 text-sm">
                    <div className="flex flex-col items-center text-gray-500">
                        <p>❤️Made with Love</p>
                        <p className="text-xs">Copyright © 2024 Restu Gede Purnama</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Sidebar;