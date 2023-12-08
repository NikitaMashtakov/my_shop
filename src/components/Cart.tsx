import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Cart() {
  const {cartProducts} = useContext(CartContext)
  const [badge, setBadge] = useState<string>()
  useEffect(()=>{
    let fullQuantity = 0
    for (let i = 0; i < cartProducts.length; i++) {
      fullQuantity += cartProducts[i].quantity
    }
    console.log(fullQuantity)
    setBadge(fullQuantity.toString())
  },[cartProducts])
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={badge} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}