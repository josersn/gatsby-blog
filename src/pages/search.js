import React from 'react';

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Search from "../components/Search"; 


const SearchPage = () => (
    <Layout>
    <SEO title="Busque no blog"/>
    <h1>Busque no blog</h1>
    <Search />
    </Layout>
)
export default SearchPage;
 