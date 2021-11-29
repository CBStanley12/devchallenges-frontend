import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import Card from '../../components/Card';

const HomePage = () => {
    return (
        <main className="layout-main main">
            <header className="header">
                <h1 className="header_title">Projects for devChallenges.io</h1>
            </header>

            <Link to="/button-component" className="" style={{ textDecoration: 'none' }}>
                <Card
                    title="Button Component"
                    tag="Front-end Developer Path"
                    src="https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FButtonThumbnail.png%3Falt%3Dmedia%26token%3D3ddbedcf-a08b-4144-928f-e551b4bcee80&w=1920&q=75"
                    alt="Button Component Project"
                />
            </Link>
        </main>
    );
};

/*
<Link to="/input-component" className="" style={{ textDecoration: 'none' }}>
    <Card
        title="Input Component"
        tag="Front-end Developer Path"
        src="https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FInputThumbnail.png%3Falt%3Dmedia%26token%3D73685593-9026-42a6-8c68-00243071250e&w=1920&q=75"
        alt="Input Component Project"
    />
</Link>
<Link to="/windbnb" className="" style={{ textDecoration: 'none' }}>
    <Card
        title="Windbnb App"
        tag="Front-end Developer Path"
        src="https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FInputThumbnail.png%3Falt%3Dmedia%26token%3D73685593-9026-42a6-8c68-00243071250e&w=1920&q=75"
        alt="Windbnb App Project"
    />
</Link>
*/

export default HomePage;