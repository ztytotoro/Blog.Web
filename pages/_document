import Document from 'next/document';
import { configureLoadStyles } from '@microsoft/load-themed-styles';

let _allStyles = '';

// Push styles into variables for injecting later.
configureLoadStyles((styles: string) => {
  _allStyles += styles;
});

export default class BlogDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: _App => _props => <style>{_allStyles}</style>
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style>{_allStyles}</style>
        </>
      )
    };
  }
}
