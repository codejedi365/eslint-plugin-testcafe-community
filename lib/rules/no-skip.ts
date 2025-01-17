/**
 * @fileoverview Don't allow test.skip to be added to the repository
 * @author Ben Monro
 */

import type { MemberExpression } from "@typescript-eslint/types/dist/ast-spec";
import { createRule } from "../create-rule";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

export default createRule({
    name: __filename,
    defaultOptions: [],
    meta: {
        messages: {
            noSkip: "Do not use the `.skip` hook."
        },
        type: "problem",
        docs: {
            description:
                "Don't allow `test.skip` or `fixture.skip` to be added to the repository",
            recommended: "warn"
        },
        schema: []
    },

    create(context) {
        return {
            "MemberExpression[property.name='skip']": (
                node: MemberExpression
            ) => {
                context.report({
                    node: node.property,
                    messageId: "noSkip"
                });
            }
        };
    }
});
