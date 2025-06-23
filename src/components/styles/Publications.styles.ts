import styled from 'styled-components';

export const Section = styled.section`
  padding: 80px 0;
  text-align: center;
  color: var(--color-text);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/*
// card-based layout styles
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 40px;
  width: calc(100% - 40px);
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
`;

export const Card = styled.div`
  background: var(--color-card-bg);
  padding: 25px;
  border-radius: 12px;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  display: flex;
  flex-direction: column;
  align-items: flex-start; // align text left
  height: 100%;
  border: 1px solid var(--color-accent);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
  text-align: left; // align text left

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    border-color: var(--color-accent-purple);
  }
`;
*/

// list-based layout styles
export const ListContainer = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin-top: 40px;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const ListItem = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid var(--color-accent-light);
  text-align: left;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
  font-family: 'Fira Code', monospace;
  position: relative;
  display: inline-block;
  text-align: center;
  width: 100%;

  &::after {
    content: '';
    display: block;
    width: 50%;
    height: 2px;
    background: var(--color-accent);
    margin: 10px auto 0;
  }
`;

export const PublicationTitle = styled.h3`
  font-family: 'Fira Code', monospace;
  margin-bottom: 10px;
  color: var(--color-accent);
  font-size: 1.1rem;
  width: 100%;
  text-align: left;
`;

export const Authors = styled.p`
  .author-highlight {
    font-weight: bold;
    color: var(--color-accent-purple-bright);
  }

  margin-bottom: 10px;
  line-height: 1.5;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  width: 100%;
`;

export const Venue = styled.p`
  margin-bottom: 15px;
  font-style: italic;
  color: var(--color-text-secondary);
  width: 100%;
`;

export const Note = styled.span`
  background: rgba(209, 118, 255, 0.1);
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.85rem;
  color: var(--color-accent-purple-bright);
  font-family: 'Roboto Mono', monospace;
  border: 1px solid var(--color-accent-purple);
  margin-bottom: 15px;
  margin-right: 10px; // add gap to the right
  display: inline-block;
`;

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: var(--color-accent-hover);
    color: var(--color-text);
    border-color: var(--color-accent-hover);
  }
`;

