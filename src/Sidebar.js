import React from "react";
import "./Sidebar.css";
import SidebarOpt from "./SidebarOpt";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Sidebar(){
    const [{playlists},dispatch]= useDataLayerValue();
    return(
        <div className="sidebar">
            <img className="sidebar__logo" 
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
            alt=""
            />
            <SidebarOpt Icon={HomeIcon} title="Home"/>
            <SidebarOpt Icon={SearchIcon} title="Search"/>
            <SidebarOpt Icon={LibraryMusicIcon} title="Your Library"/>

            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>
            
            {playlists?.items?.map((playlist)=>(
                <SidebarOpt title={playlist.name}/>
            ))}
            
        </div>
    );
}

export default Sidebar;