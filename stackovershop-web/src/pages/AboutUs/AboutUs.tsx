import User from '../../components/User';
import Description from '../../components/Description';
import amandaPhoto from '../../assets/fotos/amandaperfil.png';
import arthurPhoto from '../../assets/fotos/aperfil.png';
import cauePhoto from '../../assets/fotos/caueperfil.png';
import danielPhoto from '../../assets/fotos/danielperfil.png';
import pedroPhoto from '../../assets/fotos/pedroperfil.png';
import './App.css';

const AboutUs = () => {
  const users = [
    {
      avatar_url: cauePhoto,
      dev_name: 'Cauê Watanabe',
      dev_linkedin: 'https://linkedin.com/in/cauewcampos',
      dev_github: 'https://github.com/cauewcampos',
      userLoc: 'IFSP Barretos',
    },
    {
      avatar_url: danielPhoto,
      dev_name: 'Daniel Ferri',
      dev_linkedin: 'https://linkedin.com/in/daniel-ferri',
      dev_github: 'https://github.com/danferri',
      userLoc: 'IFSP São Carlos',
    },
    {
      avatar_url: pedroPhoto,
      dev_name: 'Pedro Nonato',
      dev_linkedin: 'https://linkedin.com/in/pnonato',
      dev_github: 'https://github.com/Pnonato',
      userLoc: 'IFSP São Carlos',
    },
    {
      avatar_url: arthurPhoto,
      dev_name: 'Arthur Sbruzzi',
      dev_linkedin: 'https://linkedin.com/in/arthur-sbruzzi',
      dev_github: 'https://github.com/Arthurs08',
      userLoc: 'IFSC Florianópolis',
    },
    {
      avatar_url: amandaPhoto,
      dev_name: 'Amanda Amabili',
      dev_linkedin: 'https://linkedin.com/in/amanda-amabili-da-silva',
      dev_github: 'https://github.com/Amanda-node-js',
      userLoc: 'IFSC Palhoça',
    },
  ];

  return (
    <div>
      <Description />
      <div id='users'>
        {users.map((user, index) => (
          <User
            key={index}
            avatar_url={user.avatar_url}
            dev_name={user.dev_name}
            dev_linkedin={user.dev_linkedin}
            dev_github={user.dev_github}
            userLoc={user.userLoc}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;