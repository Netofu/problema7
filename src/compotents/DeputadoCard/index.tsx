import React from 'react';
import { Deputado } from '../../types/deputado';
import { Card, Foto, Info, Nome, Detalhes } from './styles';

type DeputadoCardProps = {
  deputado: Deputado;
};

const DeputadoCard: React.FC<DeputadoCardProps> = ({ deputado }) => {
  return (
    <Card>
      <Foto src={deputado.urlFoto} alt={deputado.nome} />
      <Info>
        <Nome>{deputado.nome}</Nome>
        <Detalhes>
          <strong>{deputado.siglaPartido}</strong> - {deputado.siglaUf}
        </Detalhes>
        {deputado.email && (
          <Detalhes>📧 {deputado.email}</Detalhes>
        )}
      </Info>
    </Card>
  );
};

export default DeputadoCard;
