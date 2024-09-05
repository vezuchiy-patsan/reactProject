import webpack from "webpack";
import { BuildOptions } from "./types/config";
import {buildCssLoaders} from "./loader/buildCssLoaders";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const cssLoader = buildCssLoaders(isDev);

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
    ];

}