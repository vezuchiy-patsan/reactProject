import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoaders(isDev: boolean) {

       return {
           test: /\.s[ac]ss$/i,
           use: [
               isDev ? 'style-loaders' : MiniCssExtractPlugin.loader,
               {
                   loader: 'css-loaders',
                   options: {
                       modules: {
                           auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                           localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                       },

                   },

               },
               "sass-loaders",
           ],
       }
};