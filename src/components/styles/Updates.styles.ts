import styled from 'styled-components';

export const UpdatesSection = styled.div`
    margin-top: 0rem;
`;

export const UpdatesList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 1.5rem;
`;

export const UpdateItem = styled.li`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors?.text || '#FFFFFF'};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const UpdateDate = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.primary || '#64FFDA'};
  margin-right: 0.75rem;
`;

export const UpdateText = styled.span`
  color: ${({ theme }) => theme.colors?.text || '#FFFFFF'};
`;
