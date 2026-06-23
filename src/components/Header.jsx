import chefClaude from "../assets/chef-claude-icon.png"

export default function Header(){
    return(
        <header>
            <img src= {chefClaude} alt="Image of Chef Claude" className="chefClaude" />
            <h1 className="title">Chef Claude</h1>
        </header>
    )
}