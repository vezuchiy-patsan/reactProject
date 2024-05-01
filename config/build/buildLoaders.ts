import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                    },

                },

            },
            "sass-loader",
        ],
    }

    const fileLoader =
        {
            test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/i,
                use: [
            {
                loader: 'file-loader',
            },
        ],
        };


    // если не используется typescript используем babel-loader
    const typeScriptLoaders = {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
    };

    const babelLoader = {
        test: /\.(tsx|js|jsx)$/,
            exclude: /node_modules/,
        use: {
        loader: "babel-loader",
            options: {
            presets: ['@babel/preset-env'],
            "plugins": [
                [
                    "i18next-extract",
                    {
                        locales: ['en', 'ru'],
                        keyAsDefaultValue: true
                    }
                ]
            ]
            }
        }
    };

    return [
        babelLoader,
        typeScriptLoaders,
        cssLoader,
        svgLoader,
        fileLoader,
    ]

}