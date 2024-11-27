import { Link } from 'react-router-dom';
import '../Games.css';

const games = [
    {id: 1, name: 'RED DEAD REDEMPTION II', description: 'Red Dead Redemption 2 is a 2018 action-adventure game by Rockstar Games. It’s the third game in the Red Dead series and a prequel to Red Dead Redemption. Set in a fictional 1899 U.S., it follows Arthur Morgan, an outlaw in the Van der Linde gang, as he navigates the end of the Wild West, facing government forces, rival gangs, and other threats. The game offers both first- and third-person perspectives and an open world to explore. Players engage in activities like shootouts, robberies, hunting, and horseback riding, interact with NPCs, and make moral choices that affect their honor rating. Crimes committed by the player trigger responses from law enforcement and bounty hunters.', image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Red_Dead_Redemption.jpg'},
    {id: 2, name: 'GOD OF WAR', description: 'God of War Ragnarök is a 2022 action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It’s the sequel to the 2018 game God of War and continues the story of Kratos and his son Atreus in ancient Scandinavia. The game follows their journey through the Nine Realms as they try to prevent Ragnarök, the prophesied end of the world', image: 'https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg'},
    {id: 3, name: 'GTA V', description: 'Grand Theft Auto V (GTA V) is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It’s the seventh main entry in the Grand Theft Auto series. The game is set in the fictional state of San Andreas, which is based on Southern California, and follows three main characters: Michael De Santa, a retired bank robber; Franklin Clinton, a street gangster; and Trevor Philips, a drug dealer and gunrunner. These characters work together to commit heists while dealing with pressure from a corrupt government agency and powerful criminals', image: 'https://i0.wp.com/thegamekeys.in/wp-content/uploads/2023/08/71uizbdZ5dL.jpg?resize=569%2C800&ssl=1'},
    {id: 4, name: 'SPIDER-MAN REMASTERED', description: 'Marvel’s Spider-Man Remastered is an enhanced version of the original 2018 game developed by Insomniac Games and published by Sony Interactive Entertainment. This remastered edition features updated visuals, improved performance, and additional content. The game follows an experienced Peter Parker as he battles iconic villains in New York City while balancing his personal life and career', image: 'https://i.ebayimg.com/images/g/Sl4AAOSweJtkLrFE/s-l1600.webp'},
    {id: 5, name: 'ASSASSINS CREED', description: 'Assassin’s Creed Mirage is a 2023 action-adventure game developed by Ubisoft Bordeaux and published by Ubisoft. Set in 9th-century Baghdad during the Islamic Golden Age, the game follows Basim Ibn Ishaq, a street thief who joins the Hidden Ones to fight for peace and liberty against the Order of the Ancients', image: 'https://preview.redd.it/whatd-you-guys-think-of-assassins-creed-mirage-v0-uh4lhiufg6ac1.jpeg?auto=webp&s=2850422e201ffafa83f79062d7a5982c798997f2'},
];

export default function Games() {
    return (
        <div className="games-container">
            <h1 className="title">Games List</h1>
            <div className="games-list">
                {games.map((game) => (
                    <div className="game-card" key={game.id}>
                        <Link to={`/games/${game.id}`} state={{ game }} className="game-link">
                            <img 
                                src={game.image} 
                                alt={game.name} 
                                className="game-image" 
                            />
                            <div className="game-info">
                                <h3 className="game-name">{game.name}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
