import React from 'react';
import { Typography } from '@material-ui/core';

import '@/components/layouts/footer/footer.scss';

function Footer() {
  return (
    <div
      className="footer"
    >
      <Typography
        variant="caption"
        align="center"
        display="block"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Voluptatibus eaque a suscipit ut asperiores pariatur tempora accusamus fugit veritatis.
        Nemo omnis ipsum commodi quidem, magnam eveniet repudiandae error veritatis illum.
      </Typography>
    </div>
  );
}

export default Footer;
