import Navbar from "./NavbarVar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Lightbulb, Archive, Trash } from "react-bootstrap-icons";
const Header = () => {
  const buttonNameList = [
    <h5 style={{ paddingRight: "16px" }}>Notes</h5>,
    <h5>Archive</h5>,
    <h5 style={{ paddingRight: "20px" }}>Trash</h5>,
  ];
  const[searchKey,setSerachKey] = useState("")
  const [sideIcons, updateSideIcon] = useState([
    {
      id: 1,
      bg: "#f7ce6d",
      buttonName: "",
      buttonClassName: "rounded-circle searchButton",
      iconName: Lightbulb,
    },
    {
      id: 2,
      bg: "white",
      buttonName: "",
      buttonClassName: "rounded-circle searchButton",
      iconName: Archive,
    },
    {
      id: 3,
      bg: "white",
      buttonName: "",
      buttonClassName: "rounded-circle searchButton",
      iconName: Trash,
    },
  ]);



  const [sideBarProp, updateSideBarProp] = useState([
    {
      className: "",
      flag: false,
      width: "width100",
    },
  ]);

  const [notes, updateNotes] = useState([
    {
      id: 1,
      title: "Food",
      data: "Eat food at 7",
      noteFlag: true,
      arcFlag: false,
      trashFlag: false,
    },
    {
      id: 2,
      title: "Food",
      data: "Eat food at 7ufhurhgrhgrgvbjkvuivhigggr grhiugrrhgiuhigrhiughughiurg ugrhuigr grhg",
      noteFlag: false,
      arcFlag: true,
      trashFlag: false,
    },
    {
      id: 3,
      title: "Food1",
      data: "Eat food at 7",
      noteFlag: true,
      arcFlag: false,
      trashFlag: false,
    },
  ]);

  const addNote = (note) => {
    const id1 = Math.floor(Math.random() * 1000) + 1;
    const newNote = {
      id: id1,
      title: note.inputTitle,
      data: note.inputData,
      noteFlag: true,
      arcFlag: false,
      trashFlag: false,
    };
    updateNotes([...notes, newNote]);
  };
  const [curContent, updateCurContent] = useState(1);
  const changeSideBar = (id) => {
    updateSideBarProp(
      sideBarProp.map((s) => {
        return s.flag == false
          ? {
              ...s,
              className: "shadow-lg p-3 mb-5 bg-white rounded",
              flag: true,
              width: "width200",
            }
          : { ...s, className: "", flag: false, width: "width100" };
      })
    );
    updateSideIcon(
      sideIcons.map((sideIcon) =>
        sideBarProp[0].flag == true
          ? {
              ...sideIcon,
              buttonClassName: "rounded-circle searchButton",
              buttonName: "",
            }
          : {
              ...sideIcon,
              buttonClassName: "rounded searchButton2 btnAtEx",
              buttonName: buttonNameList[sideIcon.id - 1],
            }
      )
    );
  };

  const changeBg = (id) => {
    updateSideIcon(
      sideIcons.map((sideIcon) =>
        sideIcon.id === id
          ? { ...sideIcon, bg: "#f7ce6d" }
          : { ...sideIcon, bg: "white" }
      )
    );
    updateCurContent((s) => id);
    setSerachKey("")
   
  };

  const setArc = (id) =>{
    updateNotes(
      notes.map((note) =>
      
        note.id === id
        ?{...note,noteFlag:false,arcFlag:true,trashFlag:false}
        :note
      
      )
    )
  }

  const setNote = (id) =>{
    updateNotes(
      notes.map((note) =>
      
        note.id === id
        ?{...note,noteFlag:true,arcFlag:false,trashFlag:false}
        :note
      
      )
    )
  }

  const setTrash = (id) =>{
    updateNotes(
      notes.map((note) =>
      
        note.id === id
        ?{...note,noteFlag:false,arcFlag:false,trashFlag:true}
        :note
      
      )
    )
  }

  const setDelete = (id) =>{
    updateNotes(
      notes.map((note) =>
      
        note.id === id
        ?{...note,noteFlag:false,arcFlag:false,trashFlag:false}
        :note
      
      )
    )
  }

  const updateSerachKey = (data) =>{
    setSerachKey(data)
    
  }
  


  return (
    <div>
      <Navbar 
        sideBarProp={sideBarProp} 
        clickEventTog={changeSideBar} 
        searchKey ={searchKey}
        searchKeyUpdate={updateSerachKey}
        />
      <Sidebar
        sideIcons={sideIcons}
        clickEvent={changeBg}
        sideBarProp={sideBarProp}
        curContent={curContent}
        notes={notes}
        noteAdd={addNote}
        arcSet={setArc}
        noteSet={setNote}
        trashSet={setTrash}
        deleteSet={setDelete}
        Lightbulb={Lightbulb}
        Archive={Archive}
        Trash={Trash}
        searchKey ={searchKey}
 
      />
    </div>
  );
};

export default Header;
