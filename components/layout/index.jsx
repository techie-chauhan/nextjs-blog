import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

const name = "Shubham Chauhan"

export const siteTitle = "this is site title"

const Layout = ({ children, home }) => {
	return (
		<div className={styles.container}>
			<Head>
				<link ref="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta
					name="og:title" content={siteTitle}
				/>
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<Image
							priority
							src="/images/my/profile.png"
							className={utilStyles.borderCircle}
							height={200}
							width={150}
							alt={name}
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<a>
								<Image
									priority
									src="/images/my/profile.png"
									className={utilStyles.borderCircle}
									height={200}
									width={150}
									alt={name}
								/>
							</a>
						</Link>
						<h1 className={utilStyles.heading2Xl}>
							<Link href="/">
								<a>
									{name}
								</a>
							</Link>
						</h1>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.BackToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	)
}

export default Layout