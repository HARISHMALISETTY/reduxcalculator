import Header from "react";

class ClassAppHeader extends Header.Component{
    render(){
        return (<section> <h2>Header using Class Component</h2>
        <div style={{display: "flex",backgroundColor:"lightseagreen"}}>            
            <marquee><img src="https://cdn-images-1.medium.com/max/396/1*xdhm7cqz8DwDzQNXxhZXVA@2x.png"></img></marquee>
            <ul><b> 
                <li>Home</li>
                    <li>Why</li>
                    <li>Curriculum</li>
                    <li>Team</li>
                    <li>Employers</li>
                    <li>Admission</li>
                    <li>Price</li>
                    <li>FAQ</li>
                </b>
            </ul>
            <hr/>
        </div>
        </section>)
        }
        }
       export default ClassAppHeader;

       
