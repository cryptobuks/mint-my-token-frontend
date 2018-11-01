import styled from "styled-components"

const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
`

const Header = () => {
  return (
    <nav>
      <h2>Mint My Token ⚒️</h2>
      <style jsx>{`
        nav {
          padding: 5px;
          background: #a9a9a9;
        }
        h2 {
          font-size: 2rem;
          font-weight: 600;
          text-align: center;
          color: black;
        }
      `}</style>
    </nav>
  )
}

export default Header
