import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ProfileButton() {
  return (
    <Link style={{textDecoration: "none"}} to= "/profile">
      <Button variant="contained"  type="button">
        Profile
      </Button>
    </Link>
  );
}