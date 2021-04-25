import React from 'react';
import Link from 'next/link'
import Nav from '../component/nav'
function Index(props) {
    return (
        <div>
            <Nav/>
            <h2>Hello Index</h2>
            <Link href="about">
                <a>About page</a>
            </Link>

            <style jsx>
              {
                    `
                    h2{
                        color: red;
                    }
                    `
    
              }

            </style>

        </div>
    );
}

export default Index;