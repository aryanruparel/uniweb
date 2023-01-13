import Navbar from "../components/Navbar"
import Heroslider from "../components/Heroslider";
import Info from "../components/Info";
import Footer from "../components/Footer";
import Typewriter from "typewriter-effect";

function Home (){
    return(
        <>
        <Navbar/>
       
        <Heroslider/>
        <>
            <ul className="list-marked-2 box-categories-list">
        <li>
         
            
            <table >
                <tr>
                    <td className="National">
                 <a href="Nationalholiday">
                <img src="https://images.unsplash.com/photo-1532664189809-02133fee698d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" width="368" height="420"></img>
                </a>
                <h5 className="box-categories-title">Glimpses Of India</h5>
                    </td>

                    <td className="International">
                    <a href="Internationalholiday">
                <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" width="368" height="420"></img>
                </a>
                <h5 className="box-categories-title">Foreign</h5>
                    </td>
                    <td className="Weekend">
                    <a href="Weekendgetaway">
                <img src="https://images.unsplash.com/photo-1598528831787-6a3a98049990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"  alt="" width="368" height="420"></img>
                </a>
                <h5 className="box-categories-title">Weekend</h5>
                    </td>
                </tr>
            </table>
        
           
           
        </li>
        
        </ul>
        </>
        <>
            <Info/>

        </>
        <>
     
        <Typewriter className="typewriter" 
      onInit={(typewriter) => {
        typewriter.typeString("Hello").pauseFor(2000).deleteAll().typeString("this ").pauseFor(2000).deleteAll().typeString("is").pauseFor(2000).deleteAll().typeString("a").pauseFor(2000).deleteAll().typeString("testimonial").pauseFor(2000).deleteAll().start();
      } }
      />
        </>
        <>
            <Footer/>
        </>
        
        </>
    )
    
}

export default Home;