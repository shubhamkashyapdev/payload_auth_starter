import { CollectionConfig } from "payload/types";

export const Settings: CollectionConfig = {
    slug: "settings",
    fields: [
        {
            name: "show_form",
            type: "checkbox",
            defaultValue: true,
            required: true,
        }
    ],
}