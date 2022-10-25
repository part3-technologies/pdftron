import styled from 'styled-components';

export const BlockStyles = styled.div`
	position: relative;
	transition: 0.1s;
    border: 2px solid #333;
    margin: 5rem auto;
    max-width: 60rem;
    border-radius: 4px;
	.block-title {
		position: relative;
		padding: 1rem 1rem 1rem 2.5rem;
		background: #f9f9f9;
		width: 100%;
		box-sizing: border-box;
		border-radius: 4px;
		:hover {
			background: #f4f4f4;
		}
	}
    button {
      border: none;
      cursor: pointer;
    }
	.block-item {
		margin: 0;
	}
	.block-row {
		display: flex;
		align-items: center;
		width: 100%;
		text-align: left;
	}
	.expand-btn {
		position: absolute;
		top: 0.5rem;
		right: 1rem;
		border-radius: 4px;
		padding: 0.5rem 0.5rem 0.25rem 0.5rem;
		svg {
			height: 17px;
			width: 17px;
			transition: transform 0.1s;
		}
	}
`;
