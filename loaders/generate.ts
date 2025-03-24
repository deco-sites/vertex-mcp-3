import { createVertex } from "@ai-sdk/google-vertex";
import {
  experimental_generateImage as generateImage,
  generateObject,
  generateText,
} from "ai";

const vertex = createVertex({
  googleAuthOptions: {
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
    credentials: {
      "type": "service_account",
      "project_id": "flawless-empire-447101-h3",
      "private_key_id": "7ef0a66dad192bbad212c7a86082d053af048e8f",
      "private_key":
        "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDYO86WYMg4WlWB\nLChroC6v/TCkBTOjM/7QaBpkEKVVtaiCpp1XquyOXLzcZOhT+10gkxMOuGT7YpRI\nZfxBebuUQ/HOBVYHFeKrCHZlXX2eiaiMoEQETVlxShV47rarWT6ERjy9qzBZRLHG\n12jVUHJT1Kka2KBrE/4Cz32VSF9dDe5xjfUT8Cvixo5YmDEGWvwx/3cIXlvpR6l8\nytRkH18PTtXftTwMRFM5UzLfUztmZrA4z4ZOPs+NvqX7tQekYtEMfXYzo4SqYdYB\nygzE8pEhDHePX0vMhbRHiY72DoEikfs7xPTeySrK+VUHBhoWneR1o+b0/52kFprt\n2hVwBO6NAgMBAAECggEABm/pW4KwEzVlPD4zSdjv6t9PtmJNQjuHB29B8d6o/V82\nEAWjw3tcJXTPToRWgkGGaTTXqWWF5BHwNiOLGevk0KohJa/0+qsFH3BWDfh1h+Wz\nNdSDkdk3o27AKuR4Xat/d/KbVk4lV1L7M98vyMHnVWWMTzdJt0ZWFoFUzL/lzuBQ\nSHUA25kXXJdHClYWAHHNp3fT8xwwofKtV7El/7F8vyb++ZUDcZ7nBrmF0aef+nYb\nRUz+32dmGHoI9v74WD8YXuPUr7KFK4k4/ARc/INzxqEIzqGLyOtdyiYEiavxI8uH\ntHUTP9lTWlS8V2ZuLoJBqk0XwWgX/y1IXAXU3VOGwQKBgQDxo90D8cgxcCEZluPM\nFCfi1ZXbe87Yn79ZSI/G0iKsPVSyVqG6SBDOutbmW+yXDUQsc3gW/KIamRFB/ICk\nErhgzhAuAMlCA9Ecu1wuuX1XeMe46j7zID3X8JRqoBq2R+OL+oa2AjtZb1YseRX2\nOgeNXTyVwXwaMDcyIWB59Wz0HQKBgQDlFW2WYpbcLc5P75z+ZdNMoV5EsWnjUX71\nfHcwoBgyJVUNzyV63CsI8E7TxbzEWm+SrQgoiqep0aA2EVIhRvJk9hnikbGZ5q2F\nzrc3SXcGNd/Ih7AaaoWzdt44c85rwg5rDsEa6yyxQWH815RYOW4I0XK5tr+OkgPy\nqlWJvoL5MQKBgQDweomMUWVQfi0S0G3oPe7r+m/nPLHAOEswSdx8m8hR7b+KtFjD\nkNDZTGxuWPF96n/8VPYguk+BdPAN4YMMxmykOq8zeSjSAAZuN7An+AXbtaHeT5FS\nWLXzX8P00V2EJss4FZ1XKaVy/jCelerbXykA8NdImoQtc+qag0kGVs+VqQKBgCXW\nsUA6zqJVqpNHh835cbphmRmNmGjkyCyyP1m3x+dYhUD/qzgs76rNTqfqLHDeYzl9\n/S/9Hw6MwoLLv54hgt4sTEBBQm2iTZ0hdN/b8Z4D/g+4Yd0rJSRsiO4YKstfxVPn\nnvvcRoiMvSuvTCB6c/Ne7S1Bw0hAVAicG/7hie6xAoGBAOkcvgjgog0LgB2mdYSQ\nCRywGT/V9RcAamV4H2Y3nOxVqWpLhKq9xkHW46gm2/tdCVn0CwuIhf8VJ0HWQhu1\niaTOyRrKUfUd1vcwE2crXw1EUmolltnec3PIPwgBniSb0a3cCUK135cJo85m2RL3\nsYOUasRj8pjmYTBZ5DGW2wAG\n-----END PRIVATE KEY-----\n",
      "client_email":
        "test-266@flawless-empire-447101-h3.iam.gserviceaccount.com",
      "client_id": "103111576932961677727",
      "universe_domain": "googleapis.com",
    },
  },
  location: "us-central1",
  project: "flawless-empire-447101-h3",
});

/**
 * @name generate
 * @description Generate text, object or image using Vertex AI available models. Available models: gemini-2.0-flash-001
gemini-2.0-flash-exp
gemini-1.5-flash
gemini-1.5-pro,
imagen-3.0-generate-001
imagen-3.0-fast-generate-001
 */
export interface Props {
  type: "text" | "object" | "image";
  prompt: string;
  model:
    | "gemini-2.0-flash-001"
    | "gemini-2.0-flash-exp"
    | "gemini-1.5-flash"
    | "gemini-1.5-pro"
    | "imagen-3.0-generate-001"
    | "imagen-3.0-fast-generate-001";
  schema?: unknown;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
  vertexOptions?: Record<string, unknown>;
  useSearchGrounding?: boolean;
}
export default async function generate({
  type,
  prompt,
  model,
  schema,
  aspectRatio,
  vertexOptions,
  useSearchGrounding,
}: Props) {
  const vertexModel = vertex(model, {
    ...vertexOptions,
    // Add search grounding if specified
    ...(type !== "image" && useSearchGrounding
      ? { useSearchGrounding: true }
      : {}),
  });

  console.log({ vertexModel });

  return "teste";

  switch (type) {
    case "text": {
      // Generate plain text with potential search groundingg
      const { text, providerMetadata, sources } = await generateText({
        model: vertexModel,
        prompt,
      });

      // Extract Google-specific metadata
      const googleMetadata = providerMetadata?.google as {
        groundingMetadata?: {
          webSearchQueries?: string[];
          searchEntryPoint?: { renderedContent: string };
          groundingSupports?: Array<{
            segment: {
              text: string;
              startIndex: number;
              endIndex: number;
            };
            groundingChunkIndices: number[];
            confidenceScores: number[];
          }>;
        };
        safetyRatings?: unknown;
      };

      return {
        content: [{ type: "text" as const, text }],
        metadata: googleMetadata,
        sources,
      };
    }

    case "object": {
      // Generate structured data with potential search grounding
      const { object, providerMetadata } = await generateObject({
        model: vertexModel,
        prompt,
        schema,
      });

      const googleMetadata = providerMetadata?.google;

      return {
        content: [{
          type: "resource" as const,
          resource: { text: JSON.stringify(object), uri: "" },
        }],
        metadata: googleMetadata,
      };
    }

    case "image": {
      if (!aspectRatio) {
        throw new Error(
          "aspectRatio is required for image generation. Supported values: 1:1, 3:4, 4:3, 9:16, 16:9",
        );
      }

      const result = await generateImage({
        model: vertexModel,
        prompt,
        aspectRatio,
        n: 1,
        size: "1024x1024",
        seed: 42,
        providerOptions: {},
      });

      console.log("result", result);

      // Return the base64 image data
      return {
        content: [{
          type: "image" as const,
          data: result.images[0] as unknown as string,
          mimeType: "image/png",
        }],
      };
    }

    default: {
      throw new Error(`Unknown generation type: ${type}`);
    }
  }
}
