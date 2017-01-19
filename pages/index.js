// Native
import Head from 'next/head'
import React from 'react'

// Packages
import moment from 'moment'

// Components
import Link from '../components/link'
import {UL, LI} from '../components/list'

// Data
import posts from '../data/posts'

export default class Meta extends React.Component {
  render() {
    for (const post of posts) {
      const year = moment(post.date, 'DD-MM-YYYY').year()
      post.url = `/${year}/${post.id}`
    }

    return (
      <div>
        <Head>
          <title>Leo Lamprecht</title>
        </Head>

        <div>Heyho!</div>

        <UL>
          {
            posts.map(post => (
              <LI key={post.id}>
                <Link href={post.url}>
                  {post.title}
                </Link>
              </LI>
            ))
          }
        </UL>
      </div>
    )
  }
}
