// theme/themeConfig.ts
import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#2D3DDF',
    fontFamily: 'Poppins-Regular',
    
  },
  components: {
    Table: {
      headerBg: '#FFFFFF'
    }
  }
};

export default theme;
