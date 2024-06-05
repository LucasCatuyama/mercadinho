import React from 'react';
import { Link } from 'gatsby';


const NotFoundPage = () => (
    <div>
        <p>404: Página não encontrada</p>
        <Link to="/">Voltar para home</Link>
    </div>
);

export default NotFoundPage;
