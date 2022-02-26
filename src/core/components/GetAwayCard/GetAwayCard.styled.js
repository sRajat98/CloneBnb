import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const ImageTile = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 0.8rem;
  overflow: hidden;
`;

export const CityDriveContainer = styled.div`
  color: var(--color-gray);
`;

export const CityText = styled.h5`
  font-size: var(--fs-200);
  font-weight: bold;
`;

export const DriveText = styled.p`
  font-size: var(--fs-100);
  font-weight: lighter;
`;

export const imageStyles = { width: "100%", height: "100%" };
