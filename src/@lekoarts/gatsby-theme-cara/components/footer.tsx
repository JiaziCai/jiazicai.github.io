/** @jsx jsx */
import { Box, jsx, Flex, Link } from "theme-ui"
import Logo from "../../../../static/android-chrome-512x512.png"

const Footer = () => {
  return (
    <Box as="footer" variant="footer">
      Copyright &copy; {new Date().getFullYear()}. Made with Gatsby.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <img width="30" height="30" src={Logo} alt="Jiazi Cai Logo" />
        {` `}
        <Link
          aria-label="Link to the GitHub repository"
          sx={{ ml: 2 }}
          href="https://github.com/JiaziCai/website"
          rel="noreferrer noopener"
        >
          Website
        </Link>
        <div sx={{ mx: 1 }}>by</div>
        {` `}
        <Link aria-label="Link to the Jiazi Cai's website" rel="noreferrer noopener" href="https://jiazi.dev">
          Jiazi Cai
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
