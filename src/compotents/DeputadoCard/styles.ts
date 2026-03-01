import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`;

export const Foto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
  border: 2px solid #3498db;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Nome = styled.h3`
  margin: 0 0 5px 0;
  color: #2c3e50;
`;

export const Detalhes = styled.p`
  margin: 0;
  color: #7f8c8d;
  font-size: 0.9rem;

  strong {
    color: #3498db;
  }
`;
